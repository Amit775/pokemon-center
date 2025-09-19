import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutKnownMovesInput } from "../inputs/MoveCreateWithoutKnownMovesInput";
import { MoveUpdateWithoutKnownMovesInput } from "../inputs/MoveUpdateWithoutKnownMovesInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpsertWithoutKnownMovesInput", {})
export class MoveUpsertWithoutKnownMovesInput {
  @TypeGraphQL.Field(_type => MoveUpdateWithoutKnownMovesInput, {
    nullable: false
  })
  update!: MoveUpdateWithoutKnownMovesInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutKnownMovesInput, {
    nullable: false
  })
  create!: MoveCreateWithoutKnownMovesInput;

  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;
}
