import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutMetaStatChangesInput } from "../inputs/MovesCreateWithoutMetaStatChangesInput";
import { MovesUpdateWithoutMetaStatChangesInput } from "../inputs/MovesUpdateWithoutMetaStatChangesInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpsertWithoutMetaStatChangesInput", {})
export class MovesUpsertWithoutMetaStatChangesInput {
  @TypeGraphQL.Field(_type => MovesUpdateWithoutMetaStatChangesInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutMetaStatChangesInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutMetaStatChangesInput, {
    nullable: false
  })
  create!: MovesCreateWithoutMetaStatChangesInput;

  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;
}
