import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggerOrderByWithRelationInput } from "../../../inputs/EvolutionTriggerOrderByWithRelationInput";
import { EvolutionTriggerWhereInput } from "../../../inputs/EvolutionTriggerWhereInput";
import { EvolutionTriggerWhereUniqueInput } from "../../../inputs/EvolutionTriggerWhereUniqueInput";
import { EvolutionTriggerScalarFieldEnum } from "../../../../enums/EvolutionTriggerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyEvolutionTriggerArgs {
  @TypeGraphQL.Field(_type => EvolutionTriggerWhereInput, {
    nullable: true
  })
  where?: EvolutionTriggerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggerOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EvolutionTriggerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggerWhereUniqueInput, {
    nullable: true
  })
  cursor?: EvolutionTriggerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
