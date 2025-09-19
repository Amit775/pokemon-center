import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggerCreateManyInput } from "../../../inputs/EvolutionTriggerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEvolutionTriggerArgs {
  @TypeGraphQL.Field(_type => [EvolutionTriggerCreateManyInput], {
    nullable: false
  })
  data!: EvolutionTriggerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
