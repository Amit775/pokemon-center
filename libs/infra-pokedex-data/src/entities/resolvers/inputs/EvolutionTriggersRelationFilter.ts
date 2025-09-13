import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggersWhereInput } from "../inputs/EvolutionTriggersWhereInput";

@TypeGraphQL.InputType("EvolutionTriggersRelationFilter", {})
export class EvolutionTriggersRelationFilter {
  @TypeGraphQL.Field(_type => EvolutionTriggersWhereInput, {
    nullable: true
  })
  is?: EvolutionTriggersWhereInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggersWhereInput, {
    nullable: true
  })
  isNot?: EvolutionTriggersWhereInput | undefined;
}
