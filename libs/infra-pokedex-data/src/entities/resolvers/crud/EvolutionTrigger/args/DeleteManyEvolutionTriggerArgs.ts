import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggerWhereInput } from "../../../inputs/EvolutionTriggerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEvolutionTriggerArgs {
  @TypeGraphQL.Field(_type => EvolutionTriggerWhereInput, {
    nullable: true
  })
  where?: EvolutionTriggerWhereInput | undefined;
}
