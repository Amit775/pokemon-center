import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatUpdateWithoutNaturesIncreasedInput } from "../inputs/StatUpdateWithoutNaturesIncreasedInput";
import { StatWhereInput } from "../inputs/StatWhereInput";

@TypeGraphQL.InputType("StatUpdateToOneWithWhereWithoutNaturesIncreasedInput", {})
export class StatUpdateToOneWithWhereWithoutNaturesIncreasedInput {
  @TypeGraphQL.Field(_type => StatWhereInput, {
    nullable: true
  })
  where?: StatWhereInput | undefined;

  @TypeGraphQL.Field(_type => StatUpdateWithoutNaturesIncreasedInput, {
    nullable: false
  })
  data!: StatUpdateWithoutNaturesIncreasedInput;
}
