import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupUpdateManyMutationInput } from "../../../inputs/EggGroupUpdateManyMutationInput";
import { EggGroupWhereInput } from "../../../inputs/EggGroupWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEggGroupArgs {
  @TypeGraphQL.Field(_type => EggGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: EggGroupUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EggGroupWhereInput, {
    nullable: true
  })
  where?: EggGroupWhereInput | undefined;
}
