import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagCreateWithoutFlagMapInput } from "../inputs/MoveFlagCreateWithoutFlagMapInput";
import { MoveFlagUpdateWithoutFlagMapInput } from "../inputs/MoveFlagUpdateWithoutFlagMapInput";
import { MoveFlagWhereInput } from "../inputs/MoveFlagWhereInput";

@TypeGraphQL.InputType("MoveFlagUpsertWithoutFlagMapInput", {})
export class MoveFlagUpsertWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => MoveFlagUpdateWithoutFlagMapInput, {
    nullable: false
  })
  update!: MoveFlagUpdateWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => MoveFlagCreateWithoutFlagMapInput, {
    nullable: false
  })
  create!: MoveFlagCreateWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => MoveFlagWhereInput, {
    nullable: true
  })
  where?: MoveFlagWhereInput | undefined;
}
