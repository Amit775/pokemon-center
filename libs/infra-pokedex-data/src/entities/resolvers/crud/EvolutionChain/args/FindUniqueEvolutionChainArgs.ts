import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainWhereUniqueInput } from "../../../inputs/EvolutionChainWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEvolutionChainArgs {
  @TypeGraphQL.Field(_type => EvolutionChainWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionChainWhereUniqueInput;
}
