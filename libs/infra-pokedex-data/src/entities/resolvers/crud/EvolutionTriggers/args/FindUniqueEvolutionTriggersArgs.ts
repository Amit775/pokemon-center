import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggersWhereUniqueInput } from "../../../inputs/EvolutionTriggersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEvolutionTriggersArgs {
  @TypeGraphQL.Field(_type => EvolutionTriggersWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionTriggersWhereUniqueInput;
}
