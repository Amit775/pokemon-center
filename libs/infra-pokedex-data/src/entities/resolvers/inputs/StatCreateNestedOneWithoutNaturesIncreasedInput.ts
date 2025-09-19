import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateOrConnectWithoutNaturesIncreasedInput } from "../inputs/StatCreateOrConnectWithoutNaturesIncreasedInput";
import { StatCreateWithoutNaturesIncreasedInput } from "../inputs/StatCreateWithoutNaturesIncreasedInput";
import { StatWhereUniqueInput } from "../inputs/StatWhereUniqueInput";

@TypeGraphQL.InputType("StatCreateNestedOneWithoutNaturesIncreasedInput", {})
export class StatCreateNestedOneWithoutNaturesIncreasedInput {
  @TypeGraphQL.Field(_type => StatCreateWithoutNaturesIncreasedInput, {
    nullable: true
  })
  create?: StatCreateWithoutNaturesIncreasedInput | undefined;

  @TypeGraphQL.Field(_type => StatCreateOrConnectWithoutNaturesIncreasedInput, {
    nullable: true
  })
  connectOrCreate?: StatCreateOrConnectWithoutNaturesIncreasedInput | undefined;

  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: true
  })
  connect?: StatWhereUniqueInput | undefined;
}
