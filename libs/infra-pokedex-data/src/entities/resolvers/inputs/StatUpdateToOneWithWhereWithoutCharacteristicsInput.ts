import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatUpdateWithoutCharacteristicsInput } from "../inputs/StatUpdateWithoutCharacteristicsInput";
import { StatWhereInput } from "../inputs/StatWhereInput";

@TypeGraphQL.InputType("StatUpdateToOneWithWhereWithoutCharacteristicsInput", {})
export class StatUpdateToOneWithWhereWithoutCharacteristicsInput {
  @TypeGraphQL.Field(_type => StatWhereInput, {
    nullable: true
  })
  where?: StatWhereInput | undefined;

  @TypeGraphQL.Field(_type => StatUpdateWithoutCharacteristicsInput, {
    nullable: false
  })
  data!: StatUpdateWithoutCharacteristicsInput;
}
