import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodWhereUniqueInput } from "../../../inputs/PokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveMethodWhereUniqueInput;
}
