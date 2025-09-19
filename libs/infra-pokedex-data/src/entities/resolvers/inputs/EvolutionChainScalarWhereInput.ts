import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("EvolutionChainScalarWhereInput", {})
export class EvolutionChainScalarWhereInput {
  @TypeGraphQL.Field(_type => [EvolutionChainScalarWhereInput], {
    nullable: true
  })
  AND?: EvolutionChainScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainScalarWhereInput], {
    nullable: true
  })
  OR?: EvolutionChainScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainScalarWhereInput], {
    nullable: true
  })
  NOT?: EvolutionChainScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  baby_trigger_item_id?: IntNullableFilter | undefined;
}
