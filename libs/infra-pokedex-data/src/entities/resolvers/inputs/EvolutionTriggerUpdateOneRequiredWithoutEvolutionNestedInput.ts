import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggerCreateOrConnectWithoutEvolutionInput } from "../inputs/EvolutionTriggerCreateOrConnectWithoutEvolutionInput";
import { EvolutionTriggerCreateWithoutEvolutionInput } from "../inputs/EvolutionTriggerCreateWithoutEvolutionInput";
import { EvolutionTriggerUpdateToOneWithWhereWithoutEvolutionInput } from "../inputs/EvolutionTriggerUpdateToOneWithWhereWithoutEvolutionInput";
import { EvolutionTriggerUpsertWithoutEvolutionInput } from "../inputs/EvolutionTriggerUpsertWithoutEvolutionInput";
import { EvolutionTriggerWhereUniqueInput } from "../inputs/EvolutionTriggerWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionTriggerUpdateOneRequiredWithoutEvolutionNestedInput", {})
export class EvolutionTriggerUpdateOneRequiredWithoutEvolutionNestedInput {
  @TypeGraphQL.Field(_type => EvolutionTriggerCreateWithoutEvolutionInput, {
    nullable: true
  })
  create?: EvolutionTriggerCreateWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggerCreateOrConnectWithoutEvolutionInput, {
    nullable: true
  })
  connectOrCreate?: EvolutionTriggerCreateOrConnectWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggerUpsertWithoutEvolutionInput, {
    nullable: true
  })
  upsert?: EvolutionTriggerUpsertWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggerWhereUniqueInput, {
    nullable: true
  })
  connect?: EvolutionTriggerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggerUpdateToOneWithWhereWithoutEvolutionInput, {
    nullable: true
  })
  update?: EvolutionTriggerUpdateToOneWithWhereWithoutEvolutionInput | undefined;
}
