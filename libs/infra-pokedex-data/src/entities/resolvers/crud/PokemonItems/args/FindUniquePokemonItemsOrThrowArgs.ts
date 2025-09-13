import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemsWhereUniqueInput } from "../../../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonItemsOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonItemsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemsWhereUniqueInput;
}
