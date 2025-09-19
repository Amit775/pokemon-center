import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapeOrderByWithRelationInput } from "../../../inputs/PokemonShapeOrderByWithRelationInput";
import { PokemonShapeWhereInput } from "../../../inputs/PokemonShapeWhereInput";
import { PokemonShapeWhereUniqueInput } from "../../../inputs/PokemonShapeWhereUniqueInput";
import { PokemonShapeScalarFieldEnum } from "../../../../enums/PokemonShapeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPokemonShapeArgs {
  @TypeGraphQL.Field(_type => PokemonShapeWhereInput, {
    nullable: true
  })
  where?: PokemonShapeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonShapeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonShapeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonShapeWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonShapeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonShapeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
