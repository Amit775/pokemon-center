import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateOrConnectWithoutNaturesInput } from "../inputs/StatCreateOrConnectWithoutNaturesInput";
import { StatCreateWithoutNaturesInput } from "../inputs/StatCreateWithoutNaturesInput";
import { StatWhereUniqueInput } from "../inputs/StatWhereUniqueInput";

@TypeGraphQL.InputType("StatCreateNestedOneWithoutNaturesInput", {})
export class StatCreateNestedOneWithoutNaturesInput {
  @TypeGraphQL.Field(_type => StatCreateWithoutNaturesInput, {
    nullable: true
  })
  create?: StatCreateWithoutNaturesInput | undefined;

  @TypeGraphQL.Field(_type => StatCreateOrConnectWithoutNaturesInput, {
    nullable: true
  })
  connectOrCreate?: StatCreateOrConnectWithoutNaturesInput | undefined;

  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: true
  })
  connect?: StatWhereUniqueInput | undefined;
}
