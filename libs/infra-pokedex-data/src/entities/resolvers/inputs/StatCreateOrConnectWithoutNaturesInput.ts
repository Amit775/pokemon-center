import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateWithoutNaturesInput } from "../inputs/StatCreateWithoutNaturesInput";
import { StatWhereUniqueInput } from "../inputs/StatWhereUniqueInput";

@TypeGraphQL.InputType("StatCreateOrConnectWithoutNaturesInput", {})
export class StatCreateOrConnectWithoutNaturesInput {
  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: false
  })
  where!: StatWhereUniqueInput;

  @TypeGraphQL.Field(_type => StatCreateWithoutNaturesInput, {
    nullable: false
  })
  create!: StatCreateWithoutNaturesInput;
}
