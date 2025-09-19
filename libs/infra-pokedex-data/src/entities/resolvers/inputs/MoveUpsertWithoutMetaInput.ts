import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutMetaInput } from "../inputs/MoveCreateWithoutMetaInput";
import { MoveUpdateWithoutMetaInput } from "../inputs/MoveUpdateWithoutMetaInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpsertWithoutMetaInput", {})
export class MoveUpsertWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveUpdateWithoutMetaInput, {
    nullable: false
  })
  update!: MoveUpdateWithoutMetaInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutMetaInput, {
    nullable: false
  })
  create!: MoveCreateWithoutMetaInput;

  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;
}
