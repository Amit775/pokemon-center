import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypesOrderByWithRelationInput } from "../../../inputs/PokemonTypesOrderByWithRelationInput";
import { PokemonTypesWhereInput } from "../../../inputs/PokemonTypesWhereInput";
import { PokemonTypesWhereUniqueInput } from "../../../inputs/PokemonTypesWhereUniqueInput";
import { PokemonTypesScalarFieldEnum } from "../../../../enums/PokemonTypesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPokemonTypesArgs {
  @TypeGraphQL.Field(_type => PokemonTypesWhereInput, {
    nullable: true
  })
  where?: PokemonTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonTypesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonTypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"pokemon_id" | "type_id" | "slot"> | undefined;
}
