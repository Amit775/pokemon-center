import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggersCreateInput } from "../../../inputs/EvolutionTriggersCreateInput";
import { EvolutionTriggersUpdateInput } from "../../../inputs/EvolutionTriggersUpdateInput";
import { EvolutionTriggersWhereUniqueInput } from "../../../inputs/EvolutionTriggersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEvolutionTriggersArgs {
  @TypeGraphQL.Field(_type => EvolutionTriggersWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionTriggersWhereUniqueInput;

  @TypeGraphQL.Field(_type => EvolutionTriggersCreateInput, {
    nullable: false
  })
  create!: EvolutionTriggersCreateInput;

  @TypeGraphQL.Field(_type => EvolutionTriggersUpdateInput, {
    nullable: false
  })
  update!: EvolutionTriggersUpdateInput;
}
