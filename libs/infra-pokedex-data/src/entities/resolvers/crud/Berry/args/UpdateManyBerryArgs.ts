import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryUpdateManyMutationInput } from "../../../inputs/BerryUpdateManyMutationInput";
import { BerryWhereInput } from "../../../inputs/BerryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBerryArgs {
  @TypeGraphQL.Field(_type => BerryUpdateManyMutationInput, {
    nullable: false
  })
  data!: BerryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BerryWhereInput, {
    nullable: true
  })
  where?: BerryWhereInput | undefined;
}
