import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapesWhereUniqueInput } from "../../../inputs/PokemonShapesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePokemonShapesArgs {
  @TypeGraphQL.Field(_type => PokemonShapesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonShapesWhereUniqueInput;
}
