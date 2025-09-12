import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateWithoutStatChangesInput } from "../inputs/MoveMetaCreateWithoutStatChangesInput";
import { MoveMetaUpdateWithoutStatChangesInput } from "../inputs/MoveMetaUpdateWithoutStatChangesInput";
import { MoveMetaWhereInput } from "../inputs/MoveMetaWhereInput";

@TypeGraphQL.InputType("MoveMetaUpsertWithoutStatChangesInput", {})
export class MoveMetaUpsertWithoutStatChangesInput {
  @TypeGraphQL.Field(_type => MoveMetaUpdateWithoutStatChangesInput, {
    nullable: false
  })
  update!: MoveMetaUpdateWithoutStatChangesInput;

  @TypeGraphQL.Field(_type => MoveMetaCreateWithoutStatChangesInput, {
    nullable: false
  })
  create!: MoveMetaCreateWithoutStatChangesInput;

  @TypeGraphQL.Field(_type => MoveMetaWhereInput, {
    nullable: true
  })
  where?: MoveMetaWhereInput | undefined;
}
