import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateWithoutMetaInput } from "../inputs/MoveUpdateWithoutMetaInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpdateToOneWithWhereWithoutMetaInput", {})
export class MoveUpdateToOneWithWhereWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutMetaInput, {
    nullable: false
  })
  data!: MoveUpdateWithoutMetaInput;
}
