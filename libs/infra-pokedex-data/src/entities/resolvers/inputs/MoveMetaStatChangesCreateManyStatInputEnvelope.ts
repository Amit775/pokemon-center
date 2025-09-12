import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesCreateManyStatInput } from "../inputs/MoveMetaStatChangesCreateManyStatInput";

@TypeGraphQL.InputType("MoveMetaStatChangesCreateManyStatInputEnvelope", {})
export class MoveMetaStatChangesCreateManyStatInputEnvelope {
  @TypeGraphQL.Field(_type => [MoveMetaStatChangesCreateManyStatInput], {
    nullable: false
  })
  data!: MoveMetaStatChangesCreateManyStatInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
