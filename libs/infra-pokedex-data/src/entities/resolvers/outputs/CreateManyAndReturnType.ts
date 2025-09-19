import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnTypeDamageClassArgs } from "./args/CreateManyAndReturnTypeDamageClassArgs";
import { Generation } from "../../models/Generation";
import { MoveDamageClass } from "../../models/MoveDamageClass";

@TypeGraphQL.ObjectType("CreateManyAndReturnType", {})
export class CreateManyAndReturnType {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  damage_class_id!: number | null;

  @TypeGraphQL.Field(_type => Generation, {
    nullable: false
  })
  generation!: Generation;

  damageClass!: MoveDamageClass | null;

  @TypeGraphQL.Field(_type => MoveDamageClass, {
    name: "damageClass",
    nullable: true
  })
  getDamageClass(@TypeGraphQL.Root() root: CreateManyAndReturnType, @TypeGraphQL.Args() args: CreateManyAndReturnTypeDamageClassArgs): MoveDamageClass | null {
    return root.damageClass;
  }
}
