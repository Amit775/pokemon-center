import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoryUpdateWithoutMetaInput } from "../inputs/MoveMetaCategoryUpdateWithoutMetaInput";
import { MoveMetaCategoryWhereInput } from "../inputs/MoveMetaCategoryWhereInput";

@TypeGraphQL.InputType("MoveMetaCategoryUpdateToOneWithWhereWithoutMetaInput", {})
export class MoveMetaCategoryUpdateToOneWithWhereWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaCategoryWhereInput, {
    nullable: true
  })
  where?: MoveMetaCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoryUpdateWithoutMetaInput, {
    nullable: false
  })
  data!: MoveMetaCategoryUpdateWithoutMetaInput;
}
