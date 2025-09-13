import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutVersionGroupsInput } from "../inputs/GenerationsCreateWithoutVersionGroupsInput";
import { GenerationsUpdateWithoutVersionGroupsInput } from "../inputs/GenerationsUpdateWithoutVersionGroupsInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpsertWithoutVersionGroupsInput", {})
export class GenerationsUpsertWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutVersionGroupsInput, {
    nullable: false
  })
  update!: GenerationsUpdateWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutVersionGroupsInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;
}
