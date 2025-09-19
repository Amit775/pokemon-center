import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateWithoutNaturesIncreasedInput } from "../inputs/StatCreateWithoutNaturesIncreasedInput";
import { StatWhereUniqueInput } from "../inputs/StatWhereUniqueInput";

@TypeGraphQL.InputType("StatCreateOrConnectWithoutNaturesIncreasedInput", {})
export class StatCreateOrConnectWithoutNaturesIncreasedInput {
  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: false
  })
  where!: StatWhereUniqueInput;

  @TypeGraphQL.Field(_type => StatCreateWithoutNaturesIncreasedInput, {
    nullable: false
  })
  create!: StatCreateWithoutNaturesIncreasedInput;
}
