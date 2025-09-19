import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagUpdateWithoutFlagMapInput } from "../inputs/MoveFlagUpdateWithoutFlagMapInput";
import { MoveFlagWhereInput } from "../inputs/MoveFlagWhereInput";

@TypeGraphQL.InputType("MoveFlagUpdateToOneWithWhereWithoutFlagMapInput", {})
export class MoveFlagUpdateToOneWithWhereWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => MoveFlagWhereInput, {
    nullable: true
  })
  where?: MoveFlagWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagUpdateWithoutFlagMapInput, {
    nullable: false
  })
  data!: MoveFlagUpdateWithoutFlagMapInput;
}
