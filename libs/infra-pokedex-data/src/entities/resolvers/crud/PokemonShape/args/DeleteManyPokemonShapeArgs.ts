import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapeWhereInput } from "../../../inputs/PokemonShapeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPokemonShapeArgs {
  @TypeGraphQL.Field(_type => PokemonShapeWhereInput, {
    nullable: true
  })
  where?: PokemonShapeWhereInput | undefined;
}
