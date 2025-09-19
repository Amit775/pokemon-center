import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateWithoutCharacteristicsInput } from "../inputs/StatCreateWithoutCharacteristicsInput";
import { StatUpdateWithoutCharacteristicsInput } from "../inputs/StatUpdateWithoutCharacteristicsInput";
import { StatWhereInput } from "../inputs/StatWhereInput";

@TypeGraphQL.InputType("StatUpsertWithoutCharacteristicsInput", {})
export class StatUpsertWithoutCharacteristicsInput {
  @TypeGraphQL.Field(_type => StatUpdateWithoutCharacteristicsInput, {
    nullable: false
  })
  update!: StatUpdateWithoutCharacteristicsInput;

  @TypeGraphQL.Field(_type => StatCreateWithoutCharacteristicsInput, {
    nullable: false
  })
  create!: StatCreateWithoutCharacteristicsInput;

  @TypeGraphQL.Field(_type => StatWhereInput, {
    nullable: true
  })
  where?: StatWhereInput | undefined;
}
