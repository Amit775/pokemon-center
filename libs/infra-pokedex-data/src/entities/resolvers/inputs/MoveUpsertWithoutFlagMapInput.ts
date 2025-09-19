import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutFlagMapInput } from "../inputs/MoveCreateWithoutFlagMapInput";
import { MoveUpdateWithoutFlagMapInput } from "../inputs/MoveUpdateWithoutFlagMapInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpsertWithoutFlagMapInput", {})
export class MoveUpsertWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => MoveUpdateWithoutFlagMapInput, {
    nullable: false
  })
  update!: MoveUpdateWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutFlagMapInput, {
    nullable: false
  })
  create!: MoveCreateWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;
}
