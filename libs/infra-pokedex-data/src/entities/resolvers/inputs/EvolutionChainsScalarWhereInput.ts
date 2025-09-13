import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("EvolutionChainsScalarWhereInput", {})
export class EvolutionChainsScalarWhereInput {
  @TypeGraphQL.Field(_type => [EvolutionChainsScalarWhereInput], {
    nullable: true
  })
  AND?: EvolutionChainsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsScalarWhereInput], {
    nullable: true
  })
  OR?: EvolutionChainsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsScalarWhereInput], {
    nullable: true
  })
  NOT?: EvolutionChainsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  baby_trigger_item_id?: IntNullableFilter | undefined;
}
