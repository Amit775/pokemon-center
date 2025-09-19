import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateOrConnectWithoutNaturesInput } from "../inputs/StatCreateOrConnectWithoutNaturesInput";
import { StatCreateWithoutNaturesInput } from "../inputs/StatCreateWithoutNaturesInput";
import { StatUpdateToOneWithWhereWithoutNaturesInput } from "../inputs/StatUpdateToOneWithWhereWithoutNaturesInput";
import { StatUpsertWithoutNaturesInput } from "../inputs/StatUpsertWithoutNaturesInput";
import { StatWhereUniqueInput } from "../inputs/StatWhereUniqueInput";

@TypeGraphQL.InputType("StatUpdateOneRequiredWithoutNaturesNestedInput", {})
export class StatUpdateOneRequiredWithoutNaturesNestedInput {
  @TypeGraphQL.Field(_type => StatCreateWithoutNaturesInput, {
    nullable: true
  })
  create?: StatCreateWithoutNaturesInput | undefined;

  @TypeGraphQL.Field(_type => StatCreateOrConnectWithoutNaturesInput, {
    nullable: true
  })
  connectOrCreate?: StatCreateOrConnectWithoutNaturesInput | undefined;

  @TypeGraphQL.Field(_type => StatUpsertWithoutNaturesInput, {
    nullable: true
  })
  upsert?: StatUpsertWithoutNaturesInput | undefined;

  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: true
  })
  connect?: StatWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StatUpdateToOneWithWhereWithoutNaturesInput, {
    nullable: true
  })
  update?: StatUpdateToOneWithWhereWithoutNaturesInput | undefined;
}
