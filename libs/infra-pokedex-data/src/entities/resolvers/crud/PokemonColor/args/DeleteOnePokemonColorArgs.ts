import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorWhereUniqueInput } from "../../../inputs/PokemonColorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePokemonColorArgs {
  @TypeGraphQL.Field(_type => PokemonColorWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonColorWhereUniqueInput;
}
