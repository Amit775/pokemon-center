import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggersOrderByWithRelationInput } from "../../../inputs/EvolutionTriggersOrderByWithRelationInput";
import { EvolutionTriggersWhereInput } from "../../../inputs/EvolutionTriggersWhereInput";
import { EvolutionTriggersWhereUniqueInput } from "../../../inputs/EvolutionTriggersWhereUniqueInput";
import { EvolutionTriggersScalarFieldEnum } from "../../../../enums/EvolutionTriggersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstEvolutionTriggersOrThrowArgs {
  @TypeGraphQL.Field(_type => EvolutionTriggersWhereInput, {
    nullable: true
  })
  where?: EvolutionTriggersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EvolutionTriggersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggersWhereUniqueInput, {
    nullable: true
  })
  cursor?: EvolutionTriggersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
