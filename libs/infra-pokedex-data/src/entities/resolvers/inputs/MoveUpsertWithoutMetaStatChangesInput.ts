import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutMetaStatChangesInput } from "../inputs/MoveCreateWithoutMetaStatChangesInput";
import { MoveUpdateWithoutMetaStatChangesInput } from "../inputs/MoveUpdateWithoutMetaStatChangesInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpsertWithoutMetaStatChangesInput", {})
export class MoveUpsertWithoutMetaStatChangesInput {
  @TypeGraphQL.Field(_type => MoveUpdateWithoutMetaStatChangesInput, {
    nullable: false
  })
  update!: MoveUpdateWithoutMetaStatChangesInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutMetaStatChangesInput, {
    nullable: false
  })
  create!: MoveCreateWithoutMetaStatChangesInput;

  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;
}
