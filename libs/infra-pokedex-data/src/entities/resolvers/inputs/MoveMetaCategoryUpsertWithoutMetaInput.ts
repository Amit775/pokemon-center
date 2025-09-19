import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoryCreateWithoutMetaInput } from "../inputs/MoveMetaCategoryCreateWithoutMetaInput";
import { MoveMetaCategoryUpdateWithoutMetaInput } from "../inputs/MoveMetaCategoryUpdateWithoutMetaInput";
import { MoveMetaCategoryWhereInput } from "../inputs/MoveMetaCategoryWhereInput";

@TypeGraphQL.InputType("MoveMetaCategoryUpsertWithoutMetaInput", {})
export class MoveMetaCategoryUpsertWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaCategoryUpdateWithoutMetaInput, {
    nullable: false
  })
  update!: MoveMetaCategoryUpdateWithoutMetaInput;

  @TypeGraphQL.Field(_type => MoveMetaCategoryCreateWithoutMetaInput, {
    nullable: false
  })
  create!: MoveMetaCategoryCreateWithoutMetaInput;

  @TypeGraphQL.Field(_type => MoveMetaCategoryWhereInput, {
    nullable: true
  })
  where?: MoveMetaCategoryWhereInput | undefined;
}
