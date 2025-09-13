import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypesOrderByWithRelationInput } from "../../../inputs/PokemonFormTypesOrderByWithRelationInput";
import { PokemonFormTypesWhereInput } from "../../../inputs/PokemonFormTypesWhereInput";
import { PokemonFormTypesWhereUniqueInput } from "../../../inputs/PokemonFormTypesWhereUniqueInput";
import { PokemonFormTypesScalarFieldEnum } from "../../../../enums/PokemonFormTypesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TypesFormTypesArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypesWhereInput, {
    nullable: true
  })
  where?: PokemonFormTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonFormTypesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonFormTypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"pokemon_form_id" | "type_id" | "slot"> | undefined;
}
