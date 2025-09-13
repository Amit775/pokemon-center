import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutMetaStatChangesInput } from "../inputs/MovesCreateWithoutMetaStatChangesInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateOrConnectWithoutMetaStatChangesInput", {})
export class MovesCreateOrConnectWithoutMetaStatChangesInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutMetaStatChangesInput, {
    nullable: false
  })
  create!: MovesCreateWithoutMetaStatChangesInput;
}
