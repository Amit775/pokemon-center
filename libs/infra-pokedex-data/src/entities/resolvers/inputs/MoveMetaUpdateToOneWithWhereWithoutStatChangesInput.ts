import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaUpdateWithoutStatChangesInput } from "../inputs/MoveMetaUpdateWithoutStatChangesInput";
import { MoveMetaWhereInput } from "../inputs/MoveMetaWhereInput";

@TypeGraphQL.InputType("MoveMetaUpdateToOneWithWhereWithoutStatChangesInput", {})
export class MoveMetaUpdateToOneWithWhereWithoutStatChangesInput {
  @TypeGraphQL.Field(_type => MoveMetaWhereInput, {
    nullable: true
  })
  where?: MoveMetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaUpdateWithoutStatChangesInput, {
    nullable: false
  })
  data!: MoveMetaUpdateWithoutStatChangesInput;
}
