import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapesUpdateInput } from "../../../inputs/PokemonShapesUpdateInput";
import { PokemonShapesWhereUniqueInput } from "../../../inputs/PokemonShapesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonShapesArgs {
  @TypeGraphQL.Field(_type => PokemonShapesUpdateInput, {
    nullable: false
  })
  data!: PokemonShapesUpdateInput;

  @TypeGraphQL.Field(_type => PokemonShapesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonShapesWhereUniqueInput;
}
