import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggersCreateManyInput } from "../../../inputs/EvolutionTriggersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnEvolutionTriggersArgs {
  @TypeGraphQL.Field(_type => [EvolutionTriggersCreateManyInput], {
    nullable: false
  })
  data!: EvolutionTriggersCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
