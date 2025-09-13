import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagsCreateWithoutFlagMapInput } from "../inputs/MoveFlagsCreateWithoutFlagMapInput";
import { MoveFlagsUpdateWithoutFlagMapInput } from "../inputs/MoveFlagsUpdateWithoutFlagMapInput";
import { MoveFlagsWhereInput } from "../inputs/MoveFlagsWhereInput";

@TypeGraphQL.InputType("MoveFlagsUpsertWithoutFlagMapInput", {})
export class MoveFlagsUpsertWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => MoveFlagsUpdateWithoutFlagMapInput, {
    nullable: false
  })
  update!: MoveFlagsUpdateWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => MoveFlagsCreateWithoutFlagMapInput, {
    nullable: false
  })
  create!: MoveFlagsCreateWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => MoveFlagsWhereInput, {
    nullable: true
  })
  where?: MoveFlagsWhereInput | undefined;
}
