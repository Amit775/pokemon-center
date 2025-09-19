import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggerUpdateInput } from "../../../inputs/EvolutionTriggerUpdateInput";
import { EvolutionTriggerWhereUniqueInput } from "../../../inputs/EvolutionTriggerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEvolutionTriggerArgs {
  @TypeGraphQL.Field(_type => EvolutionTriggerUpdateInput, {
    nullable: false
  })
  data!: EvolutionTriggerUpdateInput;

  @TypeGraphQL.Field(_type => EvolutionTriggerWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionTriggerWhereUniqueInput;
}
