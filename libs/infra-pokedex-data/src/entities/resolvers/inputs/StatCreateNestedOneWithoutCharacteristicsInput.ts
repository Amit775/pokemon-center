import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateOrConnectWithoutCharacteristicsInput } from "../inputs/StatCreateOrConnectWithoutCharacteristicsInput";
import { StatCreateWithoutCharacteristicsInput } from "../inputs/StatCreateWithoutCharacteristicsInput";
import { StatWhereUniqueInput } from "../inputs/StatWhereUniqueInput";

@TypeGraphQL.InputType("StatCreateNestedOneWithoutCharacteristicsInput", {})
export class StatCreateNestedOneWithoutCharacteristicsInput {
  @TypeGraphQL.Field(_type => StatCreateWithoutCharacteristicsInput, {
    nullable: true
  })
  create?: StatCreateWithoutCharacteristicsInput | undefined;

  @TypeGraphQL.Field(_type => StatCreateOrConnectWithoutCharacteristicsInput, {
    nullable: true
  })
  connectOrCreate?: StatCreateOrConnectWithoutCharacteristicsInput | undefined;

  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: true
  })
  connect?: StatWhereUniqueInput | undefined;
}
