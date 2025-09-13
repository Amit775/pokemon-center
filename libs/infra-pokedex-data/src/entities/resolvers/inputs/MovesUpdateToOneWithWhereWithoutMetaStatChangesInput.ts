import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateWithoutMetaStatChangesInput } from "../inputs/MovesUpdateWithoutMetaStatChangesInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpdateToOneWithWhereWithoutMetaStatChangesInput", {})
export class MovesUpdateToOneWithWhereWithoutMetaStatChangesInput {
  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutMetaStatChangesInput, {
    nullable: false
  })
  data!: MovesUpdateWithoutMetaStatChangesInput;
}
