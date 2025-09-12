import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapesCreateInput } from "../../../inputs/PokemonShapesCreateInput";
import { PokemonShapesUpdateInput } from "../../../inputs/PokemonShapesUpdateInput";
import { PokemonShapesWhereUniqueInput } from "../../../inputs/PokemonShapesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonShapesArgs {
  @TypeGraphQL.Field(_type => PokemonShapesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonShapesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonShapesCreateInput, {
    nullable: false
  })
  create!: PokemonShapesCreateInput;

  @TypeGraphQL.Field(_type => PokemonShapesUpdateInput, {
    nullable: false
  })
  update!: PokemonShapesUpdateInput;
}
