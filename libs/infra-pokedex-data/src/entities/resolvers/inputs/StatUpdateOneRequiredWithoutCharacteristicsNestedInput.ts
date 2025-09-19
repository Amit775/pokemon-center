import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateOrConnectWithoutCharacteristicsInput } from "../inputs/StatCreateOrConnectWithoutCharacteristicsInput";
import { StatCreateWithoutCharacteristicsInput } from "../inputs/StatCreateWithoutCharacteristicsInput";
import { StatUpdateToOneWithWhereWithoutCharacteristicsInput } from "../inputs/StatUpdateToOneWithWhereWithoutCharacteristicsInput";
import { StatUpsertWithoutCharacteristicsInput } from "../inputs/StatUpsertWithoutCharacteristicsInput";
import { StatWhereUniqueInput } from "../inputs/StatWhereUniqueInput";

@TypeGraphQL.InputType("StatUpdateOneRequiredWithoutCharacteristicsNestedInput", {})
export class StatUpdateOneRequiredWithoutCharacteristicsNestedInput {
  @TypeGraphQL.Field(_type => StatCreateWithoutCharacteristicsInput, {
    nullable: true
  })
  create?: StatCreateWithoutCharacteristicsInput | undefined;

  @TypeGraphQL.Field(_type => StatCreateOrConnectWithoutCharacteristicsInput, {
    nullable: true
  })
  connectOrCreate?: StatCreateOrConnectWithoutCharacteristicsInput | undefined;

  @TypeGraphQL.Field(_type => StatUpsertWithoutCharacteristicsInput, {
    nullable: true
  })
  upsert?: StatUpsertWithoutCharacteristicsInput | undefined;

  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: true
  })
  connect?: StatWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StatUpdateToOneWithWhereWithoutCharacteristicsInput, {
    nullable: true
  })
  update?: StatUpdateToOneWithWhereWithoutCharacteristicsInput | undefined;
}
