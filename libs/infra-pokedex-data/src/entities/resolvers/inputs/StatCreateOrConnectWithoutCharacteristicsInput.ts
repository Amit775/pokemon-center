import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateWithoutCharacteristicsInput } from "../inputs/StatCreateWithoutCharacteristicsInput";
import { StatWhereUniqueInput } from "../inputs/StatWhereUniqueInput";

@TypeGraphQL.InputType("StatCreateOrConnectWithoutCharacteristicsInput", {})
export class StatCreateOrConnectWithoutCharacteristicsInput {
  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: false
  })
  where!: StatWhereUniqueInput;

  @TypeGraphQL.Field(_type => StatCreateWithoutCharacteristicsInput, {
    nullable: false
  })
  create!: StatCreateWithoutCharacteristicsInput;
}
