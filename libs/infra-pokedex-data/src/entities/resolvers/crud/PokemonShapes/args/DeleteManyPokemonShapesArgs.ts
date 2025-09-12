import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapesWhereInput } from "../../../inputs/PokemonShapesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPokemonShapesArgs {
  @TypeGraphQL.Field(_type => PokemonShapesWhereInput, {
    nullable: true
  })
  where?: PokemonShapesWhereInput | undefined;
}
